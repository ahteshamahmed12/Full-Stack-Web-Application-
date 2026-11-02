import Image from "next/image"

function page() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex  justify-center items-center p-4 sm:p-6">
       {/* MAIN CARD WRAPPER: 
        Yeh div mobile par column (ek ke neechay ek) hoga.
        Desktop (lg) par yeh row (side-by-side) ho jayega.*/}
        <div className="flex flex-col lg:flex-row w-full overflow-hidden">
            <div className="hidden lg:flex  lg:w-1/2 justify-center items-center p-8">
                <Image 
                src={"/SignUp.png"}
                alt="SignUp"
                width={600}
                height={600}
                className="object-contain"
                />
            </div>
        </div>

    </main>
  )
}

export default page


