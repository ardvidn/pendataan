import { Column, Entity, Index } from "typeorm";

@Index("sim_dat_nir_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "kdZnt", "simThnNirZnt"], { unique: true })
@Entity("sim_dat_nir", { schema: "public" })
export class SimDatNir {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_znt", length: 2 })
  kdZnt!: string;

  @Column("character", { primary: true, name: "sim_thn_nir_znt", length: 4 })
  simThnNirZnt!: string;

  @Column("numeric", { name: "sim_nir", precision: 12, scale: 2 })
  simNir!: string;
}
