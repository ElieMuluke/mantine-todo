import {
	TextInput,
	TextInputProps,
	ActionIcon,
	useMantineTheme,
	rem,
} from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";

export function InputWithButton(props: TextInputProps) {
	const theme = useMantineTheme();
	const [todoValue, setTodoValue] = useState("");

	return (
		<TextInput
			radius='xl'
			size='md'
			placeholder='Add ToDo...'
			onChange={(event) => setTodoValue(event.currentTarget.value)}
			rightSectionWidth={42}
			leftSection={
				<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
			}
			rightSection={
				<ActionIcon
					size={32}
					radius='xl'
					color={theme.primaryColor}
					variant='filled'
					onClick={(event) => {
						event.preventDefault();
						console.log(todoValue);
					}}
				>
					<IconArrowRight
						style={{ width: rem(18), height: rem(18) }}
						stroke={1.5}
					/>
				</ActionIcon>
			}
			{...props}
		/>
	);
}
