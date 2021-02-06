import base64 from 'base64-js';

export function base64ToFile(base64String: string, fileName: string) {
    const mime = base64String.split(new RegExp('[:;]', 'gi'))[1];
    const bytes = base64.toByteArray(base64String.split(',')[1]);
    const file = new File([bytes], fileName, { type: mime });
    return file;
}