// utils.ts

export const formatCNPJ = (value: string): string => {
  // Remove tudo o que não é dígito
  const cleaned = value.replace(/\D/g, '');

  // Aplica a máscara de CNPJ: 99.999.999/9999-99
  let formattedValue = cleaned.substring(0, 2);
  if (cleaned.length > 2) {
    formattedValue += '.' + cleaned.substring(2, 5);
  }
  if (cleaned.length > 5) {
    formattedValue += '.' + cleaned.substring(5, 8);
  }
  if (cleaned.length > 8) {
    formattedValue += '/' + cleaned.substring(8, 12);
  }
  if (cleaned.length > 12) {
    formattedValue += '-' + cleaned.substring(12, 14);
  }
  return formattedValue;
};

export const formatCEP = (value: string): string => {
  // Remove tudo o que não é dígito
  const cleaned = value.replace(/\D/g, '');

  // Aplica a máscara de CEP: 99999-999
  let formattedValue = cleaned.substring(0, 5);
  if (cleaned.length > 5) {
    formattedValue += '-' + cleaned.substring(5, 8);
  }
  return formattedValue;
};

// utils.ts

export const formatPhone = (value: string): string => {
  // Remove tudo o que não é dígito
  const cleaned = value.replace(/\D/g, '');

  // Aplica a máscara de telefone: (99) 99999-9999 ou (99) 9999-9999
  let formattedValue = '(' + cleaned.substring(0, 2);
  if (cleaned.length > 2) {
    formattedValue += ') ' + cleaned.substring(2, 7);
  }
  if (cleaned.length > 7) {
    formattedValue += '-' + cleaned.substring(7, 11);
  }
  return formattedValue;
};

export const formatDate = (value: string) => {
  // Remove tudo que não for dígito
  const cleanedValue = value.replace(/\D/g, '');

  // Aplica a máscara
  if (cleanedValue.length <= 2) {
    return cleanedValue.replace(/^(\d{0,2})/, '$1');
  }

  if (cleanedValue.length <= 4) {
    return cleanedValue.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2');
  }

  return cleanedValue
    .replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3')
    .slice(0, 10);
};

// utils.ts

export const formatTime = (value: string) => {
  // Remove tudo que não for dígito
  const cleanedValue = value.replace(/\D/g, '');

  // Aplica a máscara
  if (cleanedValue.length <= 2) {
    return cleanedValue.replace(/^(\d{0,2})/, '$1');
  }

  if (cleanedValue.length <= 4) {
    return cleanedValue.replace(/^(\d{0,2})(\d{0,2})/, '$1:$2');
  }

  return cleanedValue
    .replace(/^(\d{0,2})(\d{0,2})(\d{0,2})/, '$1:$2')
    .slice(0, 5);
};

export const validateFutureDate = (rule: any, value: string, callback: any) => {
  if (!value) {
    callback('Informe a data do evento');
    return;
  }

  const selectedDate = new Date(value);
  const currentDate = new Date();

  if (selectedDate <= currentDate) {
    callback('A data do evento deve ser maior que a data atual');
  } else {
    callback();
  }
};
