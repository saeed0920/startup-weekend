"use client"
import {Card,  CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";
import {Divider} from "@heroui/divider";
import { useEffect, useRef, useState } from 'react';



export default function Home() {

  const [text , setText ] = useState("")

  return (
    <div className="flex  px-8 flex-col md:flex-row gap-4 md:gap-[10rem] justify-center items-center md:items-start">
      <Image
        alt="Woman listing to music"
        className="object-cover img-one h-[25rem] w-auto md:h-auto md:w-[700px]"
        src="/home.png"
      />
        <span className="pointer"></span>

    <div>
  <Card className="md:mt-10  max-w-full md:max-w-[600px]">
      <CardHeader dir="rtl" className="flex gap-3">
<span className="bg-yellow-500 w-8 font-bold text-lg md:text-xl h-8 grid place-items-center rounded-full">1</span>
            <h1 className="text-xl md:text-2xl">
سیستم گرمایشی فعال شد.

              <br/>
دمای خانه ۲۲ درجه تنظیم گردید.

</h1>
       </CardHeader>
      <Divider />
      <CardBody dir="rtl">
          <p className="text-right text-base md:text-xl text-default-500">

امروز ۱۱ اسفند، با توجه به شرایط آب‌و‌هوایی، دمای هوا ۸ درجه سانتی‌گراد و وضعیت جوی نیمه‌ابری گزارش شده است.
              <br/>

با توجه به موقعیت مکانی شما و الگوی رفتاری روزهای گذشته، در این ساعت معمولاً در مسیر بازگشت از محل کار به خانه هستید و کمی بعد به استراحت روزانه می‌پردازید.

              <br/>
به همین دلیل، شرایط خانه را برای استراحت شما فراهم کرده‌ام.
</p>
      </CardBody>
      <Divider />
      
    </Card>
    </div>
</div>
  );
}
