import React from 'react';
import { useParams } from 'react-router-dom';
import TvProgramNewContainer from '../containers/TvProgramNewContainer';

function TvProgramNewPage() {
    const { id } = useParams();

    return (
        <div>
            <TvProgramNewContainer tvProgramNewId={parseInt(id,10)} />
        </div>
    );
}

export default TvProgramNewPage;