import { packages } from "../../../assets";
import Button from "../../../components/Button";


function PriceCard({ frequency }) {
  return (
    <div className=" px-5 md:px-10 py-5 grid grid-cols-1 sm:grid-cols-3  justify-between gap-y-5 gap-x-5">
      {packages.map((pkg, index) => (
        <div
          key={index}
          className=" p-5 border border-accent2 rounded-lg grid grid-rows-3"
        >
          <div className=" row-span-2  mb-5 sm:mb-3">
            <h3 className=" font-bold capitalize">{pkg.name}</h3>
            <p className=" ash-text">{pkg.description}</p>
          </div>
          <div>
          <span className=" font-bold text-3xl sm:text-2xl">
              $
              {frequency == "monthly"
                ? pkg.pricePerM
                : frequency == "yearly"
                ? pkg.pricePerY
                : ""}
            </span>
            <span className="ash-text"> {frequency}</span>

          </div>

          <div className=" row-span-1 flex sm:flex-col md:flex-row justify-start gap-5 items-center">
                <Button bg={'accent'} text='start free trial' style={'bg-primary border border-accent2 '}/>
                <Button bg={'accent'} text='choose plan'  style={'hover:bg-accent2 hover:border hover:border-primary active:border-accent'}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PriceCard;
