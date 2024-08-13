
import hollywoodImg from '../assets/hollywood.jpg';
import dakarImg from '../assets/dakar.jpg';
import japonImg from '../assets/japon.jpg';
import russieImg from '../assets/russie.jpg';

const BentoGrid = () => {

  return (
    <div className=" mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative bg-gray-200 h-80 rounded-lg overflow-hidden col-span-1 sm:col-span-2 lg:col-span-2">
        <img
          alt="Card background"
          className="w-full h-full object-cover"
          src={hollywoodImg}
        />
        <div className="absolute w-full z-10 bottom-0 left-0 p-4 text-white bg-gradient-to-t from-[rgba(0,0,0,0.7)] hover:from-[rgba(0,0,0,1)] via-transparent">
          <p className="text-xs uppercase font-bold">Diversité et innovation.</p>
          <h3 className="text-xl font-medium">Californie</h3>
        </div>
      </div>
      <div className="relative bg-gray-200 h-80 rounded-lg overflow-hidden">
        <img
          alt="Card background"
          className="w-full h-full object-cover"
          src={dakarImg}
        />
        <div className="absolute w-full z-10 bottom-0 left-0 p-4 text-white bg-gradient-to-t from-[rgba(0,0,0,0.7)] hover:from-[rgba(0,0,0,1)] via-transparent">
          <p className="text-xs uppercase font-bold">Chaleur et culture.</p>
          <h3 className="text-lg font-medium">Dakar</h3>
        </div>
      </div>

      <div className="relative bg-gray-200 h-80 rounded-lg overflow-hidden">
        <img
          alt="Card background"
          className="w-full h-full object-cover"
          src={russieImg}
        />
        <div className="absolute w-full z-10 bottom-0 left-0 p-4 text-white bg-gradient-to-t from-[rgba(0,0,0,0.7)] hover:from-[rgba(0,0,0,1)] via-transparent">
          <p className="text-xs uppercase font-bold">Vaste et puissante.</p>
          <h3 className="text-lg font-medium">Russie</h3>
        </div>
      </div>

      <div className="relative bg-gray-200 h-80 rounded-lg overflow-hidden col-span-1 sm:col-span-2 lg:col-span-2">
        <img
          alt="Card background"
          className="w-full h-full object-cover"
          src={japonImg}
        />
        <div className="absolute w-full z-10 bottom-0 left-0 p-4 text-white bg-gradient-to-t from-[rgba(0,0,0,0.7)] hover:from-[rgba(0,0,0,1)] via-transparent">
          <p className="text-xs uppercase font-bold">Tradition et technologie.</p>
          <h3 className="text-lg font-medium">Japon</h3>
        </div>
      </div>
    </div>

  );
};

export default BentoGrid;
