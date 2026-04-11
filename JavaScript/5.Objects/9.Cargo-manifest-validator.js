// 1. Normalize Units
function normalizeUnits(manifest) {
  let newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }

  return newManifest;
}


// 2. Validate Manifest
function validateManifest(manifest) {
  let errors = {};

  // containerId
  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  // destination
  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  // unit
  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  // hazmat
  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}


// 3. Process Manifest
function processManifest(manifest) {
  let validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);

    let normalized = normalizeUnits(manifest);

    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validation);
  }
}
