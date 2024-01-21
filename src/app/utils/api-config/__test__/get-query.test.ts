import { getQuery, GET_QUERY_PARAMS } from "@app/utils/api-config/get-query";
import { getServerSession } from "next-auth";

jest.mock("next-auth");
jest.mock("node-fetch");

describe("getQuery function", () => {
  const mockGetServerSession = getServerSession as jest.Mock;
  mockGetServerSession.mockResolvedValue({
    access_token: "mockedAccessToken",
  });

  (global.fetch as jest.Mock) = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: "mocked data" }),
    })
  );

  test("should make a request with the correct headers and return data", async () => {
    const queryParams: GET_QUERY_PARAMS = {
      query: "someQuery",
      variables: { key: "value" },
    };

    
    const result = await getQuery(queryParams);

    expect(mockGetServerSession).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(
      process.env.GRAPHQL_BASEURL,
      expect.objectContaining({
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer mockedAccessToken",
        },
        body: JSON.stringify({
          query: queryParams.query,
          variables: queryParams.variables,
        }),
      })
    );
    expect(result).toEqual({ data: "mocked data" });
  });
});
