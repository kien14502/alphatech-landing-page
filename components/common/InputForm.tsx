import {ReactNode} from 'react';
import {FormField, FormItem, FormControl, FormMessage} from '../ui/form';
import {Input} from '../ui/input';
import {Control, FieldPath, FieldValues} from 'react-hook-form';
import {cn} from '@/lib/utils';

type Props<T extends FieldValues> = {
	control: Control<T>;
	name: FieldPath<T>;
	placeholder?: string;
	prefix?: ReactNode;
};

const InputForm = <T extends FieldValues>({
	control,
	name,
	placeholder,
	prefix,
}: Props<T>) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({field}) => (
				<FormItem>
					<FormControl>
						<div className="relative h-fit">
							{prefix && (
								<div className="absolute left-3 top-1/2 -translate-y-1/2">{prefix}</div>
							)}
							<Input
								className={cn('h-12', prefix && 'pl-10')}
								placeholder={placeholder}
								{...field}
							/>
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
export default InputForm;
