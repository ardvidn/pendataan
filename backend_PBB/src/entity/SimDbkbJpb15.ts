import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb15_pkey", ["kdDati2", "kdPropinsi", "simJnsTangkiDbkbJpb15", "simKapasitasMaxDbkbJpb15", "simKapasitasMinDbkbJpb15", "simThnDbkbJpb15"], { unique: true })
@Entity("sim_dbkb_jpb15", { schema: "public" })
export class SimDbkbJpb15 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb15", length: 4 })
  simThnDbkbJpb15!: string;

  @Column("character", {
    primary: true,
    name: "sim_jns_tangki_dbkb_jpb15",
    length: 1,
  })
  simJnsTangkiDbkbJpb15!: string;

  @Column("numeric", {
    primary: true,
    name: "sim_kapasitas_min_dbkb_jpb15",
    precision: 9,
    scale: 4,
  })
  simKapasitasMinDbkbJpb15!: string;

  @Column("numeric", {
    primary: true,
    name: "sim_kapasitas_max_dbkb_jpb15",
    precision: 9,
    scale: 4,
  })
  simKapasitasMaxDbkbJpb15!: string;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb15" })
  simNilaiDbkbJpb15!: string;
}
