import React from "react";
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
}

const ResouseCard = ({ id, title, image, downloadNumber }: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[365px">
      <Link href={`/resource/${id}`}>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
            <div className="h-fit w-full">
                <Image 
                    src={image}
                    className="h-full rounded-md object-cover"
                    alt={title}
                    width={384}
                    height={440}
                />
            </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left" >{title}</CardTitle>
        </CardHeader>
      </Link>

      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
            <Image 
            src="/downloads.svg" width={20} height={20} alt="dowanload" />
            {downloadNumber}
        </div>
        <Link href={`{resource/${id}}`} className="flex-center text-gradient_purple-blue body-semibold gap-1.5" >
            Download now
            <Image src="/arrow-blue.svg" width={13} height={0} alt="arrow" />
        </Link>
      </CardContent>
     
    </Card>
  );
};

export default ResouseCard;
