import React from 'react';
import { X, Copy, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useClipboard } from '../hooks/useClipboard';

interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: {
    title: string;
    content: string;
    type: 'email' | 'script';
  };
}

export function TemplateModal({ isOpen, onClose, template }: TemplateModalProps) {
  const [copied, copyToClipboard] = useClipboard();

  const handleCopy = () => {
    copyToClipboard(template.content);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {template.title}
                  </h3>
                  <span className="text-sm text-gray-500 capitalize">
                    {template.type} Template
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                  {template.content}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200">
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 px-4 py-2 bg-staccato-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span>Copy to Clipboard</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}