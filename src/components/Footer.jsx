export default function Footer(){
  return (
    <footer className="py-12 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Quotestack" className="h-6 w-auto" />
          <span className="text-slate-600">© {new Date().getFullYear()} Quotestack</span>
        </div>
        <div className="text-slate-600 flex items-center gap-4 text-sm">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </div>
    </footer>
  )
}
