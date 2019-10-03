export const submitLoginForm = (idToken: string) => {
  const form = document.getElementById('form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'token';
  input.value = idToken;
  form!.appendChild(input);
  (form as any).submit();
};
