import { InfoIcon } from 'lucide-react'
import * as Alert from '@/components/ui/alert'

/**
 * A function that renders an Alert component with the provided props.
 *
 * @param {Alert.RootProps} props - the props for the Alert component
 * @return {JSX.Element} the rendered Alert component
 */
export const Demo = (props: Alert.RootProps) => {
	return (
		<Alert.Root {...props}>
			<Alert.Icon asChild>
				<InfoIcon />
			</Alert.Icon>
			<Alert.Content>
				<Alert.Title>Browser Update available</Alert.Title>
				<Alert.Description>
					For the best experience, please update your browser.
				</Alert.Description>
			</Alert.Content>
		</Alert.Root>
	)
}
