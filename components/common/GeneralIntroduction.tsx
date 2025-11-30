import {HOME_DATA} from '@/data';
import {cn} from '@/lib/utils';
import GeneralIntroductionCard from './GeneralIntroductionCard';
import {SectionTitle} from './SectionTitle';
import {fadeInLeft, fadeInRight} from '@/lib/frame-motion';

const GeneralIntroduction = () => {
	const items = HOME_DATA['general-introduction'].items;

	return (
		<div className="flex flex-col items-center justify-center gap-8">
			<SectionTitle title="General Introduction" />
			<div
				className={cn(
					'after:content-[""] after:bg-no-repeat px-8 md:px-0 after:w-[241px] after:bg-top-left after:bg-[url("/images/ic_5-4MIADJLM.png")]',
					'max-w-[840px] mx-auto w-full',
				)}>
				<div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 h-full py-8 md:py-16 flex-nowrap">
					<div className="col-span-1 md:col-span-3 gap-4 md:gap-8 flex flex-col justify-between h-full">
						<GeneralIntroductionCard
							description={items[0].description}
							imgUrl={items[0].imgUrl}
							title={items[0].title}
							width={228}
							height={214}
							variant={fadeInLeft}
						/>
						<GeneralIntroductionCard
							description={items[1].description}
							imgUrl={items[1].imgUrl}
							title={items[1].title}
							width={264}
							height={245}
							variant={fadeInLeft}
						/>
					</div>
					<GeneralIntroductionCard
						variant={fadeInRight}
						description={items[2].description}
						imgUrl={items[2].imgUrl}
						title={items[2].title}
						width={176}
						height={246}
						className="flex-col flex col-span-1 md:col-span-2 h-full py-[42.5px] px-[18.5px] w-full"
					/>
				</div>
			</div>
		</div>
	);
};
export default GeneralIntroduction;
