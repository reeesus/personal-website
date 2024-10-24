import { Instagram, Linkedin, Mail } from "react-feather";

const Footer = () => {
  return (
    <div className="mt-auto py-20 border-t border-gruvbox-bg1 dark:border-gruvboxDark-bg1">
      <div className="flex flex-col gap-20 md:flex-row items-center justify-between content-evenly mx-auto px-8 max-w-6xl">
        <div className="flex flex-col text-sm gap-4 text-gruvbox-fg4 dark:text-gruvboxDark-fg text-center md:text-left">
          <div className="text-gruvbox-red">Contact me!</div>
          <div className="flex flex-row gap-2 items-center hover:text-gruvbox-fg1 cursor-default dark:hover:text-gruvboxDark-fg4">
            <Mail className="h-4" /> kennethjriady@gmail.com
          </div>
          <div className="flex flex-row gap-2 items-center hover:text-gruvbox-fg1 cursor-default dark:hover:text-gruvboxDark-fg4">
            <Instagram className="h-4" /> @kennjffr
          </div>
          <div className="flex flex-row gap-2 items-center hover:text-gruvbox-fg1 cursor-default dark:hover:text-gruvboxDark-fg4">
            <Linkedin className="h-4" /> Kenneth Jefferson Riady
          </div>
        </div>
        <div className="text-sm text-gruvbox-bg4 md:text-gruvbox-fg4 self-center dark:text-gruvboxDark-fg text-center md:text-left">
          Copyright &copy; Kenneth Riady {new Date().getFullYear()} All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
