import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_standard_pkey", ["kdBngLantai", "kdDati2", "kdJpb", "kdPropinsi", "simThnDbkbStandard", "tipeBng"], { unique: true })
@Entity("sim_dbkb_standard", { schema: "public" })
export class SimDbkbStandard {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "sim_thn_dbkb_standard",
    length: 4,
  })
  simThnDbkbStandard!: string;

  @Column("character", { primary: true, name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { primary: true, name: "tipe_bng", length: 5 })
  tipeBng!: string;

  @Column("character", { primary: true, name: "kd_bng_lantai", length: 8 })
  kdBngLantai!: string;

  @Column("integer", { name: "sim_nilai_dbkb_standard" })
  simNilaiDbkbStandard!: number;
}
