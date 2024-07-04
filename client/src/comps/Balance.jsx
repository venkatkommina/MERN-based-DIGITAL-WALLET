/* eslint-disable react/prop-types */
export default function Balance({ balance }) {
  return (
    <div className="flex items-center">
      <div className="text-xl font-bold ml-10">Your Balance:</div>
      <div className="text-xl ml-4 font-semibold">{balance} INR</div>
    </div>
  );
}
