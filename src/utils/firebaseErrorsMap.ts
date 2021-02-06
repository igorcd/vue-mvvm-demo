const firebaseErrorsMap = new Map<string, string>([
    ["auth/user-not-found", "Parece que seu e-mail ou senha, estão errados"],
    ["auth/wrong-password", "Parece que seu e-mail ou senha, estão errados"],
    ["auth/insufficient-permission", "Este usuário não possui permissão para acessar o painel administrativo"],
    ["auth/email-already-in-use", "Parece que este e-mail ja está sendo utilizado por outra pessoa"],
    // Storage
    ['storage/object-not-found', "Este arquivo não existe"],
    ['storage/unauthorized', 'Você não possui permissão para acessar o arquivo'],
    ['storage/canceled', 'Operação cancelada'],
    ['storage/unknown', 'Erro desconhecido']
]);

export default firebaseErrorsMap;