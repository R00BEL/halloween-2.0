import { Linkedin } from "./linkedin";

const token = "1q2w3e4rady6U&i8IOWojd9";
const userId = "mfihBQoF71";
const uploadUrl =
  "https://api.linkedin.com/mediaUpload/C5622AQEqRyZX5SVd2Q/feedshare-uploadedImage/0?ca=vector_feedshare&cn=uploads&m=AQIWAupEs-S9QAAAAXxpuwjeA6D6xkb7ZqIxDMVjFBQCniaoGCVDjQWYAA&app=126410066&sync=1&v=beta&ut=1VFq6bLfsLwVY1";
const linkedin = new Linkedin(token);

it("should return user data", () => {
  const http = () => ({
    localizedLastName: "Surname",
    firstName: {
      localized: {
        ru_RU: "Name",
      },
      preferredLocale: {
        country: "RU",
        language: "ru",
      },
    },
    lastName: {
      localized: {
        ru_RU: "Surname",
      },
      preferredLocale: {
        country: "RU",
        language: "ru",
      },
    },
    id: userId,
    localizedFirstName: "Name",
  });

  expect(linkedin.getUser(http)).toStrictEqual(http());
});

it("should register the image", () => {
  const http = () => ({
    value: {
      mediaArtifact:
        "urn:li:digitalmediaMediaArtifact:(urn:li:digitalmediaAsset:C5622AQEqRyZX5SVd2Q,urn:li:digitalmediaMediaArtifactClass:feedshare-uploadedImage)",
      uploadMechanism: {
        "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest": {
          uploadUrl: uploadUrl,
          headers: {
            "media-type-family": "STILLIMAGE",
          },
        },
      },
      asset: "urn:li:digitalmediaAsset:C5622AQEqRyZX5SVd2Q",
      assetRealTimeTopic:
        "urn:li-realtime:digitalmediaAssetUpdatesTopic:urn:li:digitalmediaAsset:C5622AQEqRyZX5SVd2Q",
    },
  });

  expect(linkedin.imageUpload(http, userId)).toStrictEqual(http());
});

it("should upload a photo", () => {
  const http = () => ({});
  const data = Buffer.alloc(1000);

  expect(linkedin.imageUpload(http, uploadUrl, data)).toBeDefined();
});

it("should create a post", () => {
  const http = () => ({
    owner: `urn:li:person:${userId}`,
    activity: "urn:li:activity:6852923954508787712",
    edited: false,
    subject: "Test Share Subject",
    created: {
      actor: `urn:li:person:${userId}`,
      time: 1633864391910,
    },
    lastModified: {
      actor: `urn:li:person:${userId}`,
      time: 1633864391910,
    },
    text: {
      text: "Try to beat my record! https://lnkd.in/gpRt_nc3",
    },
    id: "6852923953837670400",
    distribution: {
      linkedInDistributionTarget: {
        visibleToGuest: true,
      },
    },
    content: {
      contentEntities: [
        {
          thumbnails: [
            {
              imageSpecificContent: {
                width: 870,
                height: 480,
              },
              resolvedUrl:
                "https://media-exp1.licdn.com/dms/image/C5622AQFvgV6ddwjY0Q/feedshare-shrink_1280/0/1633864390038?e=1636588800&v=beta&t=0my4Z-icnlSW88cYh3NcFB-JO9aZ3IAwiRf2mn89ygE",
            },
          ],
          entity: "urn:li:digitalmediaAsset:C5622AQFvgV6ddwjY0Q",
          entityLocation:
            "https://media-exp1.licdn.com/dms/image/C5622AQFvgV6ddwjY0Q/feedshare-shrink_1280/0/1633864390038?e=1636588800&v=beta&t=0my4Z-icnlSW88cYh3NcFB-JO9aZ3IAwiRf2mn89ygE",
        },
      ],
      shareMediaCategory: "RICH",
    },
  });
  expect(linkedin.getUser(http)).toStrictEqual(http());
});
