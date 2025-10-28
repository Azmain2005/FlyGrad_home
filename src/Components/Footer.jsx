import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'; // Import icons
import text from '../assets/FlyGradLogo.png';

const Footer = () => {
  return (
    <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full bg-gray-900 text-gray-300 mt-30">
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
            <div className="md:max-w-96">
                <img alt="" src={text} width={200} />

                <div className="flex items-center gap-2 mt-4">
                    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" alt="google play" className="h-10 w-auto border border-white rounded" />
                    <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" alt="app store" className="h-10 w-auto border border-white rounded" />
                </div>
            </div>
            <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                <div>
                    <h2 className="font-semibold mb-5">Company</h2>
                    <ul className="text-sm space-y-2">
                        <li><a href="/">Home</a></li>
                        <li><a href="https://chat.flygrad.tech/">GradWhisper</a></li>
                        <li><a href="#testiominal">Reviews</a></li>
                        <li><a href="#FAQ">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p className="pt-4 text-center text-sm pb-5">
            Copyright {new Date().getFullYear()} © <a href="https://flygrad.tech/">flyGrad</a>. All Right Reserved.
        </p>
    </footer>
)
};

export default Footer;
