import React, { PropsWithChildren, ReactNode } from 'react'
import { FlexStyle, ProgressBarAndroidComponent, TextStyle, View, ViewStyle, } from 'react-native'
import { withTheme } from 'react-native-paper'
import { AnyStyle, CustomTheme, styleProps } from '../config/Types'
import { Style } from 'react-native-paper/lib/typescript/components/List/utils'
import { ScrollView } from 'react-native-gesture-handler'

type propsType = {
    loading? : boolean,
    theme : CustomTheme,
    children? : ReactNode | undefined,
    style? : ViewStyle 
}


const Layout = ({loading = false , theme , children , style} : propsType) => {
    const styles = createStyles({theme})
  return (
    <ScrollView style= {[styles.container , {...style}]}>
        {children}
    </ScrollView>
  )
}

export default withTheme(Layout)



const createStyles = ({theme}:styleProps):AnyStyle=>({
    container : {
        flex : 1,
        backgroundColor : theme?.colors.background,
        padding : 5,
    },
})
