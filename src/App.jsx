export default function App() {
  return (
    <div className="flex flex-col justify-start md:flex-row shadow-lg shadow-gray-300/50">
       <div className="flex flex-col md:flex-row justify-around items-center sm:">
      <div>
        <img className="h-28 w-80" src="https://ik.imagekit.io/onsnhxjshmp/LeapScholar/new-header-logo_7i5sVUf9VF.svg"></img>
      </div>
      <div className="flex flex-col md:flex-row gap-y-2 space-x-10 p-10 justify-start font-bold items-center">
        <div>
        Study Abroad
        </div>
        <div>
        IELTS
        </div>
        <div>
        Events
        </div>
        <div>
        Scholarships
        </div>
        <div>
        About
        </div>
        <div className="border-gray-600">Sign in</div>
       
        <div className="bg-slate-800 rounded-md align-middle p-2 bg-gradient-to-tr text-white">Sign up</div>
      </div>
    </div>
    </div>
   

  )
}