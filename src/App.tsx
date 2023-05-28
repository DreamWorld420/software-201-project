import React from "react";
import IntroductionCard from "./components/IntroductionCard";

const App = () => {
	return (
		<div className="flex flex-col h-full gap-y-8 w-screen bg-[#2f3a5b] px-32 py-32">
			<IntroductionCard
				vectorSrc="/public/Instagram Video Streaming-amico.svg"
				vectorAlt="Instagram Video Streaming-amico"
				height="24rem"
			>
				<article
					style={{
						direction: "rtl",
					}}
					className="flex flex-col justify-center h-full gap-y-2 px-8"
				>
					<header>
						<h2 className="text-2xl">چرا این نیاز دیده شده؟</h2>
					</header>
					<main className="">
						<p className="text-lg h-full">
							با توجه به فیلترینگ و محدودیت ها فروشگاه های اینستاگرامی آسیب های
							جدی دیدند، همچنین برخی به دنبال چند پلتفرمی کار کردن و توسعه کسب و
							کار خود و ایجاد اعتماد و افزایش اعتبار به دنبال توسعه کسب و کار
							خود به شکل وبسایت اینترنتی هستند. از این رو ایده اینشاپ ایجاد
							شد...
						</p>
					</main>
				</article>
			</IntroductionCard>
			<IntroductionCard
				vectorSrc="/public/Halloween Instagram feed-amico.svg"
				vectorAlt="Halloween Instagram feed-amico.svg"
				height="24rem"
			>
				<article
					style={{
						direction: "rtl",
					}}
					className="flex flex-col justify-center h-full gap-y-2 px-8"
				>
					<header>
						<h2 className="text-2xl">اینشاپ چیست؟</h2>
					</header>
					<main className="">
						<p className="text-lg h-full">
							اینشاپ یک پلتفرم کلی تبدیل پیج های اینستاگرامی به فروشگاه اینترنتی
							به شکل اتومات است که در دو نسخه رایگان و VIP ارائه میشود.
						</p>
					</main>
				</article>
			</IntroductionCard>
			<IntroductionCard
				vectorSrc="/public/Website Creator-cuate.svg"
				vectorAlt="Website Creator-cuate"
				height="24rem"
			>
				<article
					style={{
						direction: "rtl",
					}}
					className="flex flex-col justify-center h-full gap-y-2 px-8"
				>
					<header>
						<h2 className="text-2xl">چه خدماتی ارائه میده؟</h2>
					</header>
					<main className="">
						<p className="text-lg h-full">
							اتوماسیون: اضافه کردن اتومات محصولات از اینستاگرام آموزش: آموزش
							استفاده از پلتفرم و ورود به دنیای فروش از طریق وبسایت درگاه
							پرداخت: سهولت به اتصال به درگاه پرداخت ریالی و نقل و انتقال امن
							پول شاخص و نمودار: ارائه شاخص و نمودار فروش و درصد موفقیت تمپلت:
							تمپلت های آماده و بهینه سازی شده
						</p>
					</main>
				</article>
			</IntroductionCard>
			<IntroductionCard
				vectorSrc="/public/Online Review-amico.svg"
				vectorAlt="Online Review-amico"
				height="24rem"
			>
				<article
					style={{
						direction: "rtl",
					}}
					className="flex flex-col justify-center h-full gap-y-2 px-8"
				>
					<header>
						<h2 className="text-2xl">نظر شما چیه؟</h2>
					</header>
					<main className="">
						<p className="text-lg h-full">
							در صورتی که به این پروژه علاقه مندید میتوانید نظرات خود را در راه
							بهبود و کلیت پلتفرم از طریق آدرس ایمیل زیر به اشتراک بزارید...
						</p>
						<a
							href="mailto:info@example.com"
							className="bg-[#F9D949] p-2 rounded-lg w-8 h-4"
						>
							info@example.com
						</a>
					</main>
				</article>
			</IntroductionCard>
		</div>
	);
};

export default App;
