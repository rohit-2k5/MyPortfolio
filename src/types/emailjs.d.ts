declare module '@emailjs/browser' {
  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement,
    publicKey?: string
  ): Promise<any>;
  const _default: {
    sendForm: typeof sendForm;
  };
  export default _default;
}
