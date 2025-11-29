import {cn} from '@/lib/utils';
import Image from 'next/image';
import AnimatedSection from './AnimationSection';
import {Variants} from 'motion';

type Props = {
	title: string;
	description: string;
	imgUrl: string;
	className?: string;
	width: number;
	height: number;
	variant?: Variants;
};

const GeneralIntroductionCard = ({
	title,
	description,
	imgUrl,
	className,
	width,
	height,
	variant,
}: Props) => {
	return (
		<AnimatedSection
			variant={variant}
			className={cn(
				'shadow-primary blur-shadow px-[42.5px] py-[18.5px] rounded-tr-[30px] rounded-bl-[30px] flex items-center gap-6',
				className,
			)}>
			<Image
				className="shrink-0 object-cover flex-1"
				width={width}
				height={height}
				src={imgUrl}
				alt={title}
			/>
			<div className="flex flex-col gap-4">
				<h3 className="text-2xl font-bold text-center">{title}</h3>
				<p className="text-center">{description}</p>
			</div>
		</AnimatedSection>
	);
};

export default GeneralIntroductionCard;
