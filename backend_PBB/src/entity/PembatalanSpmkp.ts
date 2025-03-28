import { Column, Entity, Index } from "typeorm";

@Index("j3_j2_fk", ["kdKantor", "kdKanwil", "noSpmkp"], {})
@Index("pembatalan_spmkp_pkey", ["kdKantor", "kdKanwil", "noSkPembatalanSpmkp"], { unique: true })
@Entity("pembatalan_spmkp", { schema: "public" })
export class PembatalanSpmkp {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", {
    primary: true,
    name: "no_sk_pembatalan_spmkp",
    length: 30,
  })
  noSkPembatalanSpmkp!: string;

  @Column("character", { name: "no_spmkp", length: 30 })
  noSpmkp!: string;

  @Column("timestamp without time zone", { name: "tgl_pembatalan_spmkp" })
  tglPembatalanSpmkp!: Date;

  @Column("timestamp without time zone", { name: "tgl_cetak_pembatalan_spmkp" })
  tglCetakPembatalanSpmkp!: Date;

  @Column("character", { name: "nip_pencetak_pembatalan_spmkp", length: 18 })
  nipPencetakPembatalanSpmkp!: string;

  @Column("character varying", {
    name: "alasan_pembatalan_spmkp",
    nullable: true,
    length: 30,
  })
  alasanPembatalanSpmkp!: string | null;
}
