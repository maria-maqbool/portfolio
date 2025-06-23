import { Star, GitFork } from "lucide-react"

const Footer = () => {
    return ( 
        <>
             {/* Footer */}
        <footer className="text-center py-8">
          <div className="text-gray-400 text-sm mb-4">
            <p>Designed & Built by Maria Maqbool</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm font-mono">
            <div className="flex items-center gap-1">
              <Star size={14} />
              <span>7,899</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork size={14} />
              <span>4,828</span>
            </div>
          </div>
        </footer>
        </>
     );
}
 
export default Footer;