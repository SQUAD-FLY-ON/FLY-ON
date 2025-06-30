// Carousel.tsx
import { activityArea } from '@/types';
import React, { ReactElement } from 'react';
import { FlatList, ViewStyle } from 'react-native';

type CarouselProps = {
    data: activityArea[];
    renderItem: (item: activityArea, index: number) => ReactElement | null;
    gap?: number;
    style?: ViewStyle;
};

export default function Carousel({
    data,
    renderItem,
    gap = 16,
    style,
}: CarouselProps) {
    return (
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[{ gap }, style]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => renderItem(item, index)}
        />
    );
}
