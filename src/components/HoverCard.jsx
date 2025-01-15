import { FileText, Database, LinkIcon, Award } from 'lucide-react'

export default function HoverCards() {
  const cards = [
    { icon: FileText, title: "KOA Journal", description: "Journal of Karnataka Orthopaedic Association (JKOA)." },
    { icon: Database, title: "Important Resources", description: "KOA Resources database providing references and knowledge." },
    { icon: LinkIcon, title: "Important Links", description: "List of external links crucial for Members of the KOA Members." },
    { icon: Award, title: "Fellowships", description: "List of Fellowships supported by KOA." }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="w-full h-[300px] border border-yellow-300 rounded-lg shadow-sm transition-colors duration-300 hover:bg-[#ffc107] group"
        >
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <card.icon className="w-12 h-12 mb-4 text-yellow-500 group-hover:text-black" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-black">{card.title}</h3>
            <p className="text-sm text-gray-600 group-hover:text-black">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

