import React from 'react';
import { Github, Linkedin, Mail , CodeIcon} from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Let's Connect</h2>
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          <a href="https://github.com/gauravsharma5166" className="bg-gray-800 p-6 rounded-xl flex items-center gap-4 hover:bg-gray-700 transition-colors">
            <Github className="w-8 h-8" /> 
            <div>
              <h3 className="font-bold">GitHub</h3>
              <p className="text-gray-400">Check out my contributions</p>
            </div>
          </a>
          <a href="https://leetcode.com/u/gauravsharma5166/" className="bg-gray-800 p-6 rounded-xl flex items-center gap-4 hover:bg-gray-700 transition-colors">
            <CodeIcon className="w-8 h-8" />
            <div>
              <h3 className="font-bold">LeetCode</h3>
              <p className="text-gray-400">Check out my Profile...</p>
            </div>
          </a>
          <a href="https://www.naukri.com/code360/profile/gaurav5166" className="bg-gray-800 p-6 rounded-xl flex items-center gap-4 hover:bg-gray-700 transition-colors">
            <CodeIcon className="w-8 h-8" />
            <div>
              <h3 className="font-bold">Code360</h3>
              <p className="text-gray-400">Check out my Profile...</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/gaurav-sharma-ba018723b/" className="bg-gray-800 p-6 rounded-xl flex items-center gap-4 hover:bg-gray-700 transition-colors">
            <Linkedin className="w-8 h-8" />
            <div>
              <h3 className="font-bold">LinkedIn</h3>
              <p className="text-gray-400">Connect with me professionally</p>
            </div>
          </a>
          <a href="mailto:gauravsharma5166@gmail.com" className="bg-gray-800 p-6 rounded-xl flex items-center gap-4 hover:bg-gray-700 transition-colors">
            <Mail className="w-8 h-8" />
            <div>
              <h3 className="font-bold">Email</h3>
              <p className="text-gray-400">gauravsharma5166@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}