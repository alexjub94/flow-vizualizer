import React from "react";
import Components from '../config/views.components';
import ViewConfig from '../config/viewConfig.interface';


export default (data : ViewConfig, backClbk: () => void) => {
    if (!data) return null;

    function createComponent(item: ViewConfig): React.ReactNode {
        const { name, id, type } = item;
        return React.createElement(
            Components[type] as any,
            {
                backClbk,
                name,
                key: id,
            } as any
        );
    }

    // Don't render anything if the payload is falsey.
    function renderer(
        config: ViewConfig | null,
    ): React.ReactNode {
        if (!config) return null;

        return createComponent(config);
    }

    return renderer(data);
}