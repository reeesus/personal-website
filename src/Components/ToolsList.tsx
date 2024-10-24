import {
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaJsSquare,
  FaLaravel,
  FaLinux,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { DiJqueryLogo, DiMongodb, DiMysql } from "react-icons/di";
import { SiAnsible, SiIntellijidea, SiKubernetes } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { GrArchlinux } from "react-icons/gr";
import { VscTerminalBash, VscVscode } from "react-icons/vsc";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const ToolsList = () => {
  return (
    <div className="flex flex-row gap-4 flex-wrap justify-center items-center">
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaHtml5 /> HTML
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaCss3 /> CSS
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaJsSquare /> Javascript
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaJava /> Java
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaPython /> Python
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <DiMysql /> MySQL
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <BiLogoPostgresql /> PostgreSQL
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <DiMongodb /> MongoDB
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <IoLogoFirebase /> Firebase
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaLinux /> Linux
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <GrArchlinux /> Arch Linux
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaDocker /> Docker
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaJenkins /> Jenkins
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <SiAnsible /> Ansible
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <SiKubernetes /> Kubernetes
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <VscTerminalBash /> Bash
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaReact /> React
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <RiNextjsFill /> Next JS
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaPhp /> PHP
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaLaravel /> Laravel
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <DiJqueryLogo /> JQuery
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <RiTailwindCssFill />
        Tailwind CSS
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <BiLogoTypescript /> TypeScript
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <VscVscode /> Visual Studio Code
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <SiIntellijidea /> IntelliJ Idea
      </div>
      <div className="flex flex-row items-center gap-3 rounded-md border border-gruvbox-fg py-1 px-2.5 text-center text-sm transition-all shadow-sm">
        <FaGitAlt /> Git
      </div>
    </div>
  );
};

export default ToolsList;
