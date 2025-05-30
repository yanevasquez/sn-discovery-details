var agentName = 'mid.server.windows_mid';
var gr = new GlideRecord('ecc_queue');
gr.addQuery('agent', agentName);
gr.addQuery('^agent=mid.server.windows_mid^topic!=HeartbeatProbe^ORtopic=NULL^source!=NULL');
gr.limit(1);
gr.query();
if (gr.hasNext()) {
    while (gr.next()) {
        gs.info(
            ' | State: ' + gr.state +
            ' | Queue: ' + gr.queue +
            //' | Payload: ' + gr.payload +
            ' | Source: ' + gr.source);
 
    }
} else {
    gs.info("nada retornado")
}
