
import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import vue from '../assets/svg/skills/vue.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import java from '../assets/svg/skills/java.svg'
import php from '../assets/svg/skills/php.svg'
import git from '../assets/svg/skills/git.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import nmap from '../assets/svg/skills/nmap.svg'
import burpsuite from '../assets/svg/skills/burpsuite.svg'
import wireshark from '../assets/svg/skills/wireshark.svg'
import websec from '../assets/svg/skills/websec.png'
import offsec from '../assets/svg/skills/offsec.png'
import netsec from '../assets/svg/skills/netsec.png'
import kalilinux from '../assets/svg/skills/kalilinux.svg'
import metasploit from '../assets/svg/skills/metasploit.png'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'java':
            return java;
        case 'php':
            return php;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'nmap':
            return nmap;
        case 'burpsuite':
            return burpsuite;
        case 'wireshark':
            return wireshark;
        case 'web security':
            return websec;
        case 'network sec':
            return netsec;
        case 'offsec':
            return offsec;
        case 'kali linux':
            return kalilinux;
            case 'metasploit':
            return metasploit;
        default:
            break;
    }
}