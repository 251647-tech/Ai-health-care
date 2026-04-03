from openai import OpenAI
client = OpenAI()

def get_ai_response(symptoms):
    prompt = f"""
    Symptoms: {symptoms}

    Respond in JSON format:
    {{
      "conditions": [
        {{"name": "", "probability": ""}}
      ],
      "urgency": "",
      "medicines": [
        {{"name": "", "timing": ""}}
      ],
      "diet": {{
        "eat": [],
        "avoid": []
      }},
      "advice": ""
    }}
    """

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "system", "content": "You are a safe medical assistant."},
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content