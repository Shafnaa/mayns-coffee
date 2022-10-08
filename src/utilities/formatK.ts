export default function formatK(price: number){
  const kformat = price / 1000
  return (kformat + "K")
}