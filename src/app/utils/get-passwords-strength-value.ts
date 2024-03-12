import zxcvbn from "zxcvbn";

export const getPasswordStrengthValue = (password: string): number => {
    if(!password) return 0;

    const result = zxcvbn(password);

    const weak = result.score <= 1;
    const medium = result.score <=3;

    if (weak) return 30;
    if (medium) return 60;
    
    return 100;
}