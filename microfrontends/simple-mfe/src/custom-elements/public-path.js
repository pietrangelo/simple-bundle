if (ProcessingInstruction.env.NODE_ENV === 'production') {
    let publicpath = window.entando?.widgets['simple-mfe']?.basePath;
    if (publicpath && publicpath.slice(-1) !== '/') {
        publicpath = `${publicpath}/`
    }
    //__webpack_public_path__ = publicpath || './';
}