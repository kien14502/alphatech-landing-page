import GeneralIntroduction from '@/components/common/GeneralIntroduction';
import HomeBanner from '@/components/common/HomeBanner';
import Achievements from '@/components/common/Achievements';
import Partner from '@/components/common/Partner';

export default function Home() {
	return (
		<div className="flex flex-col">
			<HomeBanner />
			<GeneralIntroduction />
			<Achievements />
			<Partner />
		</div>
	);
}
