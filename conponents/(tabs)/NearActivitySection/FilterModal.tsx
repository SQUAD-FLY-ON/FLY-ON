import CustomButton from '@/conponents/CustomButton';
import { RadioButton } from '@/conponents/RadioButton';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

import React, { SetStateAction, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface FilterModalProps { ref: React.RefObject<any | null>; currentKey: string; setCurrentKey: React.Dispatch<SetStateAction<string>>; options: { key: string; label: string; }[] }
const FilterModal = (({ ref, currentKey, setCurrentKey, options }: FilterModalProps) => {
    const [selectedKey, setSelectedKey] = useState<string>(currentKey);
    return (
        <BottomSheetModal
            ref={ref}
            onChange={(index) => console.log(index)}
            animateOnMount
            snapPoints={[270]}
            backdropComponent={(props) => (
                <BottomSheetBackdrop
                    {...props}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                    opacity={0.5}
                />
            )}
        >
            <BottomSheetView style={{ padding: 18, backgroundColor: 'white', gap: 12 }}>
                <Text style={styles.modalTitle}>체험장 추천 기준을 선택해주세요</Text>
                <View style={styles.modalRadios}>
                    {options.map((opt) => (
                        <RadioButton
                            key={opt.key}
                            label={opt.label}
                            selected={selectedKey === opt.key}
                            onPress={() => setSelectedKey(opt.key)}
                        />
                    ))}
                </View>
                <View style={styles.modalButton}>
                    <CustomButton text="선택 완료" onPress={() => {
                        setCurrentKey(selectedKey)
                        ref?.current.close();

                    }} />
                </View>
            </BottomSheetView>
        </BottomSheetModal>
    );
});
export default FilterModal;
const styles = StyleSheet.create({
    container: {
        gap: 24,
        marginTop: 48,
    },
    titleContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 4,
    },
    title: {
        fontFamily: 'Pretendard-Bold',
        fontWeight: 700,
        fontSize: 22,
        lineHeight: 26,
    },
    link: {
        fontFamily: 'Pretendard-Regular',
        fontSize: 12,
        textDecorationLine: 'underline',
        color: '#8E9297',
    },
    modalTitle: {
        fontFamily: 'Pretendard',
        fontWeight: 700,
        fontSize: 22
    },
    modalRadios: {
        paddingHorizontal: 6,
    },
    modalButton: {
        marginTop: 27,
    }
});