type LeadSource = 'whatsapp' | 'formulario';

interface LeadEventDetails {
  source: LeadSource;
  location: string;
  service?: string;
}

export function trackLead({ source, location, service }: LeadEventDetails) {
  if (typeof window === 'undefined') return;

  const eventId = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;

  const eventData = {
    event: 'generate_lead',
    event_name: 'Lead',
    lead_source: source,
    lead_location: location,
    event_id: eventId,
    ...(service ? { lead_service: service } : {}),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);

  window.fbq?.('track', 'Lead', {
    content_name: location,
    content_category: source,
    ...(service ? { service } : {}),
  }, { eventID: eventId });
}
