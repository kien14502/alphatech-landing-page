import {FieldValues, Control, FieldPath} from 'react-hook-form';
import {FormField, FormItem, FormControl, FormMessage} from '../ui/form';
import {Textarea} from '../ui/textarea';

type Props<T extends FieldValues> = {
	control: Control<T>;
	name: FieldPath<T>;
	placeholder?: string;
};

const TextareaForm = <T extends FieldValues>({
	control,
	name,
	placeholder,
}: Props<T>) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({field}) => (
				<FormItem>
					<FormControl>
						<Textarea
							className="resize-none h-28"
							{...field}
							placeholder={placeholder}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
export default TextareaForm;
