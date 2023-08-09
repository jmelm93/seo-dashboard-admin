import React from 'react';
import NewFirestoreDocument from '../sections/NewFirestoreDocument';
import { DocumentType } from '../@types';

const pickComponent = (templateId: 'new' | 'edit' | string): React.ComponentType<{ documentType: DocumentType }> | null => {
    switch (templateId) {
        case 'new':
            return NewFirestoreDocument;
        default:
            return null;  
    }
}

type Props = {
    docType: DocumentType;
    templateId: 'new' | 'edit';
}

export default function ChangeDocument({ docType, templateId }: Props): JSX.Element {
    const ConnectorComponent = pickComponent(templateId);

    if (ConnectorComponent) {
        return (
            <ConnectorComponent 
                documentType={docType}
            />
        );
    }

    return <></>;

}
