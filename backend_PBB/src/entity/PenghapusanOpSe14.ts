import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefKelurahan } from "./RefKelurahan";
import { Pegawai } from "./Pegawai";

@Index("penghapusan_op_se14_pkey", ["kdBlokPenghapusan", "kdDati2", "kdJnsOpPenghapusan", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrutPenghapusan"], { unique: true })
@Entity("penghapusan_op_se14", { schema: "public" })
export class PenghapusanOpSe14 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", {
    primary: true,
    name: "kd_blok_penghapusan",
    length: 3,
  })
  kdBlokPenghapusan!: string;

  @Column("character", {
    primary: true,
    name: "no_urut_penghapusan",
    length: 4,
  })
  noUrutPenghapusan!: string;

  @Column("character", {
    primary: true,
    name: "kd_jns_op_penghapusan",
    length: 1,
  })
  kdJnsOpPenghapusan!: string;

  @Column("character", { name: "thn_pajak_penghapusan_op", length: 4 })
  thnPajakPenghapusanOp!: string;

  @Column("character varying", { name: "no_ba_penghapusan_op", length: 50 })
  noBaPenghapusanOp!: string;

  @Column("timestamp without time zone", {
    name: "tgl_ba_penghapusan_op",
    default: () => "statement_timestamp()",
  })
  tglBaPenghapusanOp!: Date;

  @Column("character varying", {
    name: "no_sk_pembatalan",
    nullable: true,
    length: 50,
  })
  noSkPembatalan!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_sk_pembatalan",
    nullable: true,
    default: () => "statement_timestamp()",
  })
  tglSkPembatalan!: Date | null;

  @Column("character varying", {
    name: "keterangan",
    nullable: true,
    length: 50,
  })
  keterangan!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_penghapusan_op",
    default: () => "statement_timestamp()",
  })
  tglPenghapusanOp!: Date;

  @ManyToOne(() => RefKelurahan, (refKelurahan) => refKelurahan.penghapusanOpSes)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
  ])
  refKelurahan!: RefKelurahan;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.penghapusanOpSes)
  @JoinColumn([{ name: "nip_perekam_penghapusan_op", referencedColumnName: "nip" }])
  nipPerekamPenghapusanOp!: Pegawai;
}
