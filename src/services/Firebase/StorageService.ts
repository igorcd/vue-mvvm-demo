import firebase from 'firebase/app';
import firebaseErrorsMap from '@/utils/firebaseErrorsMap';
import { DEFAULT_API_ERROR } from '@/utils/constants';

export interface StorageService {
    uploadFile: (data: {file: File; directory?: string; onProgress?: (progress: number) => void}) => Promise<void>;
    getFile: (directory: string) => Promise<string>;
    getMultipleFiles: (directory: string) => Promise<{ name: string; url: string}[]>;
    deleteFile: (directory: string) => Promise<void>;
}

export default function StorageServiceInitialize(Storage: firebase.storage.Storage) {
    // File Methods
    const uploadFile = (data: {file: File; directory?: string; onProgress?: (progress: number) => void}): Promise<void> => {
        return new Promise((resolve, reject) => {

            const { file, onProgress, directory } = data;
            const root = Storage.ref();

            const uploadTask = root.child((directory || '') + file.name).put(file);
    
            uploadTask.on('state_changed', 
            // Estado mudou
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    onProgress && onProgress(Math.round(progress));
                },
                // Error
                (error) => {
                    reject(error);
                },
                // Finish
                () => {
                    resolve();
                }
            );
        });
    };

    // Pegar arquivo
    const getFile = (directory: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            const fileRef = Storage.ref().child(directory);
            fileRef.getDownloadURL()
                .then(url => resolve(url))
                .catch(error => {
                    reject(firebaseErrorsMap.get(error.code) || DEFAULT_API_ERROR);
                });
        });
    };

    // Pegar multiplos arquivos
    const getMultipleFiles = (directory: string): Promise<{ name: string; url: string}[]> => {
        return new Promise((resolve, reject) => {
            const root = Storage.ref();
            const directoryRef = root.child(directory);
    
            const urls: { name: string; url: string}[] = [];
    
            // Listar arquivos
            directoryRef.listAll()
                .then(resp => {
                // Carregar URLs
                    resp.items.forEach(el => {

                        el.getDownloadURL()
                            .then((url: string) => {
                                urls.push({ name: el.name, url: url });
                            
                                // Retornar urls
                                if(urls.length == resp.items.length) {
                                    resolve(urls);
                                }
                            })
                            .catch(error => reject(firebaseErrorsMap.get(error.code) || DEFAULT_API_ERROR));
                    });
                })
                .catch(error => {
                    reject(firebaseErrorsMap.get(error.code) || DEFAULT_API_ERROR);
                });
        });
    };

    // Apagar arquivo
    const deleteFile = (directory: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            const imageRef = Storage.ref().child(directory);
            imageRef.delete()
                .then(() => resolve())
                .catch(error => reject(firebaseErrorsMap.get(error.code) || DEFAULT_API_ERROR));
        });
    };

    const StorageService: StorageService = {
        uploadFile,
        getFile,
        getMultipleFiles,
        deleteFile
    };

    return StorageService;
}

