import { environment } from "src/environments/environment";

export const RS_LINKS = [
    {logo: 'assets/img/logos/facebook-logo.png', link: environment.fb},
    {logo: 'assets/img/logos/instagram-logo.png', link: environment.instagram},
    {logo: 'assets/img/logos/whatsapp-logo.png', link: environment.WApp},
    {logo: 'assets/img/logos/gmail-logo.png', link: `https://mail.google.com/mail/?view=cm&fs=1&to=${environment.email}&su=Consulta para Sebastián Blanc&body=¡Saludos!`},
];