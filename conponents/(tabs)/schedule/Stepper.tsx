import AntDesign from "@expo/vector-icons/AntDesign";
import { Fragment, useEffect, useRef } from "react";
import {
	Animated,
	Easing,
	StyleSheet,
	Text,
	View
} from "react-native";

const steps = ['날짜 선택', '여행 지역 선택', '체험장/장소 선택', '여행계획 추천', '여행계획 확정'];

export default function Stepper({ currentStep }: { currentStep: number }) {
	const animatedValues = useRef(steps.map(() => new Animated.Value(0))).current;

	useEffect(() => {
		animatedValues.forEach((anim, index) => {
			Animated.timing(anim, {
				toValue: currentStep > index ? 1 : 0,
				duration: 300,
				easing: Easing.out(Easing.ease),
				useNativeDriver: false,
			}).start();
		});
	}, [currentStep]);

	return (
		<View style={styles.stepper}>
			{steps.map((label, index) => {
				const animatedScale = animatedValues[index].interpolate({
					inputRange: [0, 1],
					outputRange: [1, 1.2],
				});

				const animatedOpacity = animatedValues[index].interpolate({
					inputRange: [0, 1],
					outputRange: [0, 1],
				});

				const lineAnimatedWidth = animatedValues[index].interpolate({
					inputRange: [0, 1],
					outputRange: ['0%', '100%'],
				});
				return (
					<Fragment key={index}>
						<View style={styles.stepContainer}>
							<Animated.View
								style={[
									styles.circle,
									currentStep > index && { backgroundColor: '#007AFF', borderWidth: 0 },
									{ transform: [{ scale: animatedScale }] },
								]}
							>
								{currentStep > index && (
									<Animated.View style={{ opacity: animatedOpacity }}>
										<AntDesign name="check" size={10} color="white" />
									</Animated.View>
								)}
								{currentStep === index && <View style={styles.innerCircle} />}
							</Animated.View>
							{
								currentStep === index &&
								<Text
									style={
										styles.label
									}
									numberOfLines={1}
								>
									{label}
								</Text>
							}
						</View>

						{index < steps.length - 1 && (
							<View style={styles.line}>
								<Animated.View
									style={[
										StyleSheet.absoluteFill,
										{
											backgroundColor: '#007AFF',
											width: lineAnimatedWidth,
										},
									]}
								/>
							</View>
						)}
					</Fragment>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	stepper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		width: '100%',
		paddingVertical: 9,
		paddingHorizontal: 15,
		position: 'relative',
	},
	stepContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		position: 'relative',
	},
	circle: {
		width: 14,
		height: 14,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#A1AEBE',
		backgroundColor: '#FFF',
		marginBottom: 4,
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
	},
	innerCircle: {
		width: 7,
		height: 7,
		borderRadius: 10,
		backgroundColor: '#007AFF',
		borderColor: '#007AFF',
	},
	line: {
		flex: 1,
		backgroundColor: '#A1AEBE',
		height: 1.5,
		marginHorizontal: 4,
		overflow: 'hidden',
		position: 'relative',
	},
	label: {
		fontSize: 10,
		color: '#3A88F4',
		fontWeight: 700,
		top: 18,
		position: 'absolute',
		textAlign: 'center',
		flexWrap: 'nowrap',
		width: 67,
	},
	activeLabel: {
		color: '#007AFF',
		fontWeight: 'bold',
	},
});
