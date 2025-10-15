import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#035642] text-gray-200 py-10">
      <div className="w-11/12 mx-auto px-6 md:px-12 space-y-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow us on</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/ImarticusLearning/" target="_blank" rel="noopener noreferrer">
                <img src="https://webcdn.imarticus.org/INET/Icons.svg" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fimarticus%2F" target="_blank" rel="noopener noreferrer">
                <img src="https://webcdn.imarticus.org/oxford/Frame1597881673.svg" alt="X/Twitter" className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/company/imarticuslearning" target="_blank" rel="noopener noreferrer">
                <img src="https://webcdn.imarticus.org/INET/Icons1.svg" alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/imarticus/" target="_blank" rel="noopener noreferrer">
                <img src="https://webcdn.imarticus.org/INET/ri_instagram-fill.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://www.youtube.com/@ImarticusLearningInstitute" target="_blank" rel="noopener noreferrer">
                <img src="https://webcdn.imarticus.org/cibop/YouTubeWhite.webp" alt="YouTube" className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Download our app</h4>
            <div className="flex gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.imarticus">
                <img src="https://webcdn.imarticus.org/oxford/image9.webp" alt="Play Store" className="w-40 h-auto object-contain" />
              </a>
              <a href="https://apps.apple.com/us/app/imarticus-learning-2-0/id1588235743">
                <img src="https://webcdn.imarticus.org/oxford/image10.webp" alt="App Store" className="w-40 h-auto object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-t border-gray-700 pt-6">
          <div className="flex-shrink-0">
            <a href="/">
              <img src="https://webcdn.imarticus.org/INET/Group1000002813.png" alt="Imarticus Logo" className="w-48 h-auto object-contain" />
            </a>
          </div>
            <div className='flex flex-col items-end gap-2 text-white' >
  <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm">
            <a href="https://imarticus.org/terms-and-conditions/" className="">Terms & Conditions</a>
            <span className="hidden md:block">|</span>
            <a href="https://imarticus.org/Privacy-policy/" className="">Privacy Policy</a>
          </div>

          <p className="text-sm">&copy; 2025 Imarticus Learning Pvt. Ltd. All rights reserved.</p>
        
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
