import * as React from 'react';

export interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName }) => {
  return (
    <section>
      <div>
        <h1>Welcome, {firstName}!</h1>
      </div>
    </section>
  )
}